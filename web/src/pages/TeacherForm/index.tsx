import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import warningIcon from '../../assets/images/icons/warning.svg'

import api from '../../services/api'

import { PageTeacherForm, Main, Fieldset, Footer, ScheduleItem } from './styles'

const TeacherForm: React.FC = () => {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState(0)

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ])

  const history = useHistory()

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }])
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string | number,
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return {
          ...scheduleItem,
          [field]: field === 'week_day' ? Number(value) : value,
        }
      }

      return scheduleItem
    })

    setScheduleItems(updatedScheduleItems)
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault()

    api
      .post('classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule: scheduleItems,
      })
      .then(() => {
        alert('Cadastro realizado com sucesso.')

        history.goBack()
      })
      .catch(() => {
        alert('Algo deu errado com o cadastro.')
      })
  }

  return (
    <PageTeacherForm>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <Main>
        <form onSubmit={handleCreateClass}>
          <Fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={e => {
                setName(e.target.value)
              }}
            />

            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={e => {
                setAvatar(e.target.value)
              }}
            />

            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={e => {
                setWhatsapp(e.target.value)
              }}
            />

            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={e => {
                setBio(e.target.value)
              }}
            />
          </Fieldset>

          <Fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={e => {
                setSubject(e.target.value)
              }}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Portugues', label: 'Portugues' },
                { value: 'Matematica', label: 'Matematica' },
                { value: 'Historia', label: 'Historia' },
                { value: 'Fisica', label: 'Fisica' },
                { value: 'Quimica', label: 'Quimica' },
                { value: 'Biologia', label: 'Biologia' },
              ]}
            />

            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={e => {
                setCost(Number(e.target.value))
              }}
            />
          </Fieldset>

          <Fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map(({ week_day, from, to }, index) => (
              <ScheduleItem key={week_day}>
                <Select
                  name="week_day"
                  label="Dia da semana"
                  value={week_day}
                  onChange={e => {
                    setScheduleItemValue(index, 'week_day', e.target.value)
                  }}
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sábado' },
                  ]}
                />

                <Input
                  name="from"
                  label="Das"
                  type="time"
                  value={from}
                  onChange={e => {
                    setScheduleItemValue(index, 'from', e.target.value)
                  }}
                />

                <Input
                  name="to"
                  label="Até"
                  type="time"
                  value={to}
                  onChange={e => {
                    setScheduleItemValue(index, 'to', e.target.value)
                  }}
                />
              </ScheduleItem>
            ))}
          </Fieldset>

          <Footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante!
              <br />
              Preencha todos os dados
            </p>

            <button type="submit">Salvar o cadastro</button>
          </Footer>
        </form>
      </Main>
    </PageTeacherForm>
  )
}

export default TeacherForm
